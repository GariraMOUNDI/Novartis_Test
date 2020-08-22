

export interface Domain {
    name : string,
    count : string,
    percentage : string
}

export interface Result {
    term : string;
    count : string;
}

export interface Statistic {
    sexDivision : Domain[],
    drugDivision : Domain[]
}