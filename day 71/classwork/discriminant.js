function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    // Check if discriminant is negative, zero, or positive
    if (discriminant > 0) {
        // Two real solutions
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Two real roots: ${root1}, ${root2}`;
    } else if (discriminant === 0) {
        // One real solution
        const root = -b / (2 * a);
        return `One real root: ${root}`;
    } else {
        // No real solution, complex roots
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        return `Two complex roots: ${realPart} + ${imaginaryPart}i, ${realPart} - ${imaginaryPart}i`;
    }
}
