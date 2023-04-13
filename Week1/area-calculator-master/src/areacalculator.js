const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    if(!choice){
        return area = -1;
    }

    if(side || length || breadth || radius){
        switch (choice){
            case 'square':
                return area = side*4;
                break;
            case 'rectangle':
                return area = length * breadth;
                break;
            case 'circle':
                return area = pi*(radius*radius);
                break;
            default:
                area = -1;
        }
    }
    else{
        return -1
    }
    
    console.log(area)
}
module.exports = {calculateArea}

calculateArea('square',5)
calculateArea('rectangle',0,4,6,0)
calculateArea('circle',0,0,0,4.5)
calculateArea('cone')
calculateArea('square')
calculateArea('rectangle')
calculateArea('circle')