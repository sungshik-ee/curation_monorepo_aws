export type ActiveType = 'RED' | 'BLUE';

export type Props = {
    label: string,
    active?: boolean,
    activeType?: ActiveType,
    onClick?: (active: boolean) => void,
    key: number
}
