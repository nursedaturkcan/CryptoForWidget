export interface NavbarProps {
    type?: string;
    onSearch?: (text: string) => void;
}
export interface CustomIconProps {
    focused?: boolean;
    name?: string;
    size?: number;
    color?: string;
}
export interface CustomButtonProps {
    title:string;
    color?:string;
    onPress: () => void; 
  }
  export interface TopMenuItemProps {
    title:string;
    name:string;
  }
  export interface MenuItemProps {
    title:string;
  }
  export interface CoinItemProps {
    symbol:string;
    lastPrice:string;
    priceChangePercent:string
    onPress: () => void; 
  }