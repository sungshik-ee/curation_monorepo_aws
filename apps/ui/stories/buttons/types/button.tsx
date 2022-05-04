export type ActiveType = 'RED' | 'BLUE';
export type BooksLevelType = 'RA' | 'RB' | 'RT' | 'ALL';

export interface ButtonProps {
    label: string;
    active?: boolean;
    activeType?: ActiveType;
    onClick: (active: boolean) => void;
    key: number;
}

export type BooksLevelButtonType = {
    key: BooksLevelType;
    label: string;
    activeType: ActiveType;
};

export type ButtonsProps = {
    selectedLevel: string;
    buttonSets: Array<Array<BooksLevelButtonType>>;
    onSelect: (level: BooksLevelType) => void;
};
