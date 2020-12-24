import  imageOne from '../../images/imageOne.svg';
import  online from '../../images/online.svg';
import  signup from '../../images/signup.svg';

export const homeObjOne = {
    id : 'about',
    lightBg : false,
    lightText : true,
    lightTextDesc : true,
    topLine : 'Premium Bank',
    Headline : 'Unlimited Transactions with zero fees',
    description : ' Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel : 'GetStarted',
    imgStart : false,
    img : imageOne,
    alt : 'Car',
    dark : true,
    primary : true,
    darkText : false
}

export const homeObjTwo = {
    id : 'discover',
    lightBg : true,
    lightText : false,
    lightTextDesc : false,
    topLine : 'UNlimited Access ',
    Headline : 'Login to your account at anytime',
    description : ' We have you covered no matter where you are located. All you need is internet connection and  a phone or computer',
    buttonLabel : 'Learn More',
    imgStart : true,
    img : online,
    alt : 'Car',
    dark : false,
    primary : false,
    darkText : true,
}
export const homeObjThree = {
    id : 'signup',
    lightBg : true,
    lightText : false,
    lightTextDesc : false,
    topLine : 'Join Our Team',
    Headline : 'Creating an account is extremly easy',
    description : ' Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.',
    buttonLabel : 'Start Now',
    imgStart : false,
    img : signup,
    alt : 'Car',
    dark : false,
    primary : false,
    darkText : true,
}