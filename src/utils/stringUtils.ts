namespace StringUtils {
    
    export function add(a: string, b: string):string {
        return a + b;
    }
    
    export function subtract(a: string, b: string): string {
        return a.replace(b, '');
    }
}