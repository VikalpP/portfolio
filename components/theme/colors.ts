export enum THEME {
  LIGHT,
  DARK,
}

export enum COLOR {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  ACCENT = 'ACCENT',
  LINK = 'LINK',
}

export const themes = {
  [THEME.LIGHT]: {
    [COLOR.PRIMARY]: '#fff',
    [COLOR.SECONDARY]: '#333',
    [COLOR.ACCENT]: '#F8D57E',
    [COLOR.LINK]: '#5495ff',
  },
  [THEME.DARK]: {
    [COLOR.PRIMARY]: '#000',
    [COLOR.SECONDARY]: '#fff',
    [COLOR.ACCENT]: '#F8D57E',
    [COLOR.LINK]: '#5495ff',
  },
}
