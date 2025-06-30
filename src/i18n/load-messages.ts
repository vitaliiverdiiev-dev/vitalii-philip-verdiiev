export async function loadMessages(locale: string) {
  const comingSoon = (await import(`./messages/${locale}/coming-soon.json`))
    .default;
  const aboutMe = (await import(`./messages/${locale}/about-me.json`)).default;
  const sound = (await import(`./messages/${locale}/sound.json`)).default;
  const footer = (await import(`./messages/${locale}/footer.json`)).default;
  const contacts = (await import(`./messages/${locale}/contacts.json`)).default;
  const home = (await import(`./messages/${locale}/home.json`)).default;
  const logo = (await import(`./messages/${locale}/logo.json`)).default;
  const navigation = (await import(`./messages/${locale}/navigation.json`))
    .default;

  return {
    aboutMe,
    comingSoon,
    sound,
    footer,
    contacts,
    home,
    logo,
    navigation,
  };
}
