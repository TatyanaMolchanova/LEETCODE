let romanToInt = function(s) {

    let res = 0;

    let string = s.split('');

    console.log('string', string);

    for (let i = 0; i < string.length; i++) {


        // if ((s[i] + s[i + 1]) === 'IV') {
        //     res += 4;
        //     string.splice(i, 2)
        //     console.log('2 res', res)
        //     console.log('2 string', string)
        // }

        // console.log('start string', string)

        switch(true) {
            case (string[i] + string[i + 1]) === 'IV':

            console.log('i', i)
                res += 4;
                string.splice(i, 2)
                i = i - 1;
                console.log('then i', i)
                console.log('2 res', res)
                console.log('2 string', string)
                break;
            case (string[i] + string[i + 1]) === 'IX':
                console.log('i', i)
                res += 9;
                string.splice(i, 2)
                i = i - 1;
                console.log('2 res', res)
                console.log('2 string', string)
                break;
            case (string[i] + string[i + 1]) === 'XL':
                console.log('i', i)
                res += 40;
                string.splice(i, 2)
                i = i - 1;
                console.log('3 res', res)
                console.log('3 string', string)
                break;
            case (string[i] + string[i + 1]) === 'XC':
                console.log('i', i)
                res += 90;
                string.splice(i, 2)
                i = i - 1;
                console.log('3 res', res)
                console.log('3 string', string)
                break;
            case (string[i] + string[i + 1]) === 'CD':
                console.log('i', i)
                res += 400;
                string.splice(i, 2)
                i = i - 1;
                console.log('4 res', res)
                console.log('4 string', string)
                break;
            case (string[i] + string[i + 1]) === 'CM':
                console.log('i', i)
                res += 900;
                string.splice(i, 2)
                i = i;
                console.log('then i', i)
                console.log('4 res', res)
                console.log('4 string', string)
                break;

            case string[i] === 'I':
                res += 1;
                console.log('I', res)
                break;
            case string[i] === 'V':
                res += 5;
                console.log('V', res)
                break;
            case string[i] === 'X':
                res += 10;
                console.log('X', res)
                break;
            case string[i] === 'L':
                res += 50;
                console.log('L', res)
                break;
            case string[i] === 'C':
                res += 100;
                console.log('C', res)
                break;
            case string[i] === 'D':
                res += 500;
                console.log('D', res)
                break;
            case string[i] === 'M':
                res += 1000;
                console.log('M', res)
                break;
        }

        // console.log('middle string', string)

        console.log('8 i', i)
        console.log('s[i]', s[i])
        console.log('string[i]', string[i])

        // switch(string[i]) {
        //     case 'I':
        //         res += 1;
        //         console.log('I', res)
        //         break;
        //     case 'V':
        //         res += 5;
        //         console.log('V', res)
        //         break;
        //     case 'X':
        //         res += 10;
        //         console.log('X', res)
        //         break;
        //     case 'L':
        //         res += 50;
        //         console.log('L', res)
        //         break;
        //     case 'C':
        //         res += 100;
        //         console.log('C', res)
        //         break;
        //     case 'D':
        //         res += 500;
        //         console.log('D', res)
        //         break;
        //     case 'M':
        //         res += 1000;
        //         console.log('M', res)
        //         break;
            
        // }

        // console.log('end string', string)

        console.log('1 res', res)

    }  

    console.log('res', res)
};
