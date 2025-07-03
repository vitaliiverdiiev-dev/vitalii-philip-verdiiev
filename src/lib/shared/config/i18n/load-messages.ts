export const loadMessages = async(locale: string) => {
  const aboutMe = (await import(`@/shared/locales/${locale}/about-me.json`)).default;
  const comingSoon = (await import(`@/shared/locales/${locale}/coming-soon.json`)).default;
  const contacts = (await import(`@/shared/locales/${locale}/contacts.json`)).default;
  const footer = (await import(`@/shared/locales/${locale}/footer.json`)).default;
  const home = (await import(`@/shared/locales/${locale}/home.json`)).default;
  const logo = (await import(`@/shared/locales/${locale}/logo.json`)).default;
  const resume = (await import(`@/shared/locales/${locale}/resume.json`)).default;
  const resumePage = (await import(`@/shared/locales/${locale}/resume-page.json`)).default;
  const navigation = (await import(`@/shared/locales/${locale}/navigation.json`)).default;
  const sound = (await import(`@/shared/locales/${locale}/sound.json`)).default;

  return {
    aboutMe,
    comingSoon,
    contacts,
    footer,
    home,
    logo,
    resume, 
    resumePage,
    navigation,
    sound,
  };
}
