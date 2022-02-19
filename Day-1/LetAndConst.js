
const PI = Math.PI;

function main(r) {

    // const r = readLine();
    const area = PI * r * r;
    const perimeter = 2 * PI * r;
  
    console.log('Area of the circle is :', area);
    console.log('Perimeter of the circle is :', perimeter);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
main(3)