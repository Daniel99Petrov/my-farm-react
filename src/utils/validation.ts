export function isEmail(value:string) {
    return value.includes('@');
}

export function isNotEmpty(value: string){
    return value.trim() !== '';
}

export function hasMinLength(value:string, minLen: number){
    return value.length >= minLen;
}

export function isEqualToOtherValue(value:string, otherValue:string){
    return value === otherValue;
}