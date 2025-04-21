//Assert large headers
const headers = [
  'SUMMARY OF KEY TERMS',
  '1. ELIGIBILITY',
  '2. AVAILABILITY OF SERVICES',
  '3. CHANGES TO THE AGREEMENT',
  '4. USE OF THE SERVICES',
  '5. REWARDS',
  '6. PROMOTIONS AND SWEEPSTAKES',
  '7. PROCESSING OF PERSONAL DATA AND USE OF COOKIES',
  '8. RULES OF CONDUCT',
  '9. SUSPENSION AND TERMINATION',
  '10. INTELLECTUAL PROPERTY',
  '11. WARRANTY DISCLAIMER, LIMITATION OF LIABILITY, INDEMNITY',
  '12. GOVERNING LAW AND LANGUAGE',
  '13. DISPUTE RESOLUTION BY BINDING ARBITRATION',
  '14. GENERAL TERMS',
  '15. LOCAL LAW ADDENDUMS',
  'EU AND UK ADDENDUM',
  'CANADA ADDENDUM',
  'SOUTH KOREAN ADDENDUM',
  '16. SERVICE-SPECIFIC TERMS'
];

for (const headerText of headers) {
  for (let i = 0; i < maxPageDowns; i++) {
    const element = await driver.$(`//*[@text='${headerText}']`);
    if (await element.isDisplayed()) break;
    await driver.pressKeyCode(93); // KEYCODE_PAGE_DOWN
  }
  const element = driver.$(`//*[@text='${headerText}']`);
  await element.waitForDisplayed({ timeout: 1000 });
  expect(await element.isDisplayed()).toBe(true);
}
