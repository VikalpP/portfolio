export enum THEME {
  LIGHT,
  DARK,
}

export enum COLOR {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  ACCENT = 'ACCENT',
  DISABLED = 'DISABLED',
  LINK = 'LINK',
}

export const themes = {
  [THEME.LIGHT]: {
    [COLOR.PRIMARY]: '#fff',
    [COLOR.SECONDARY]: '#333',
    [COLOR.ACCENT]: '#F8D57E',
    [COLOR.DISABLED]: '#716e6e',
    [COLOR.LINK]: '#5495ff',
  },
  [THEME.DARK]: {
    [COLOR.PRIMARY]: '#000',
    [COLOR.SECONDARY]: '#fff',
    [COLOR.ACCENT]: '#F8D57E',
    [COLOR.DISABLED]: '#c7c7cc',
    [COLOR.LINK]: '#5495ff',
  },
}
