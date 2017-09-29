export class Clients {
    id: number;
    name: String;
    imgUrl: Object;
    hasTestimonial: boolean;
    testimonial: string;
    person: string;
    designation: string
}

export const CLIENTS: Clients[] = [
    {
        id: 101,
        name: 'averydennison',
        imgUrl: require ('../assets/images/client-avery.svg'),
        testimonial: '',
        person: '',
        designation: '',
        hasTestimonial: false
    },
    {
        id: 110,
        name: 'Mandom Corp (Singapore) Pte. Ltd.',
        imgUrl: require('../assets/images/client-befista.svg'),
        testimonial: "Working with the professionals at Creaxis has been a great experience for my team. There is a lot of synergy, and Creaxis clearly understood our objectives as they created digital campaigns that helped us realize our goals together. Their sound experience guided us from conceptualization and planning to the final implementation. Having a partner who cares about the brand, truly understands the digital landscape, and injects creativity every step of the way makes all the difference.",
        person: 'Leah Lim',
        designation: 'General Manager',
        hasTestimonial: true
    },        
    {
        id: 102,
        name: 'Canon Marketing(Malaysia)',
        imgUrl: require ('../assets/images/client-canon.svg'),
        testimonial: `I have had the privilege of working with Creaxis for more than 10 years in my role in Canon Singapore Pte Ltd. 
        Creaxis was the utmost professional in fulfilling its responsibilities and ensuring that deadlines were always adhered to. In addition, the creativity and the extra mile that they undertook for us on regular basis provided us with the competitive edge in our business. I have no hesitation whatsoever in highly recommending Creaxis in whatever capacity you may be considering for. I am recommending Creaxis in whatever creative services your business may require.`,
        person: 'Andrew Koh',
        designation: 'President & CEO',
        hasTestimonial: true
    },
    {
        id: 103,
        name: 'certis',
        imgUrl: require('../assets/images/client-certis.svg'),
        testimonial: '',
        person: '',
        designation: '',
        hasTestimonial: false
    },
    {
        id: 107,
        name: 'essilor',
        imgUrl: require('../assets/images/client-essilor.svg'),
        testimonial: '',
        person: '',
        designation: '',
        hasTestimonial: false
    },    
    {
        id: 104,
        name: 'evian',
        imgUrl: require('../assets/images/client-evian.svg'),
        testimonial: '',
        person: '',
        designation: '',
        hasTestimonial: false
    }, 
    {
        id: 108,
        name: 'president',
        imgUrl: require('../assets/images/client-president.svg'),
        testimonial: '',
        person: '',
        designation: '',
        hasTestimonial: false
    },           
    {
        id: 105,
        name: 'sony',
        imgUrl: require('../assets/images/client-sony.svg'),
        testimonial: '',
        person: '',
        designation: '',
        hasTestimonial: false
    },    
    {
        id: 106,
        name: 'Toshiba Singapore',
        imgUrl: require('../assets/images/client-toshiba.svg'),
        testimonial: "Creaxis has been a valuable partner for Toshiba through the years. They make the effort to deeply understand our company's vision and values. This understanding, combined with their own creative vision, enables Creaxis to develop unique and effective campaigns for our products. We can always see the Creaxis team’s detailed thought processes in whatever they create for us. This ensures that the copy, artwork and other creative materials they prepare convey the messages we need to promote.",
        person: 'Kitt Leong',
        designation: 'Senior Manager',
        hasTestimonial: true
    },    
    {
        id: 109,
        name: 'Wacom Singapore Pte Ltd',
        imgUrl: require('../assets/images/client-wacom.svg'),
        testimonial: 'Creaxis played an important role in rejuvenating the creative spirit of Wacom’s promotional efforts. They were able to do this by relating to our business and understanding consumer behavior. Leveraging our reputation as a provider of Creative Tools, Creaxis proposed a unique branding campaign that allows us to reach beyond the niche segment we dominate. We look forward to more collaboration with Creaxis.',
        person: 'KS Ong',
        designation: 'Senior Director',
        hasTestimonial: true
    }    
];