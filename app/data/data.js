import img1 from '@/public/images/Image (1).png'
import img2 from '@/public/images/Image (2).png'
import img3 from '@/public/images/Image (3).png'
import avatar from '@/public/images/Image (5).png'
const faq = [
    {
        id: 1,
        title: "How do I search for properties on Estatein?",
        comments: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
        avatar: avatar,
        nam: 'Wade Warren',
        occupa: "USA, California"

    },
    {
        id: 2,
        title: "What documents do I need to sell my property through Estatein?",
        comments: "Find out about the necessary documentation for listing your property with us.",
        avatar: avatar, 
        nam : 'Emelie Thomson',
        occupa: "USA, Florida"

    },
    {
        id: 2,
        title: "How can I contact an Estatein agent? ",
        comments: "Discover the different ways you can get in touch with our experienced agents.",
        avatar: avatar,
        nam: 'Emelie Thomson',
        occupa: "USA, Florida"

    }
]
const propData = [
    {
        id: 1,
        title: 'Seaside Serenity Villa',
        detail: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ',
        bedsize: 2,
        img: img1,
        bathsize: 3,
        price: "$5000",

    },
    {
        id: 2,
        title: 'Metropolitan Haven',
        detail: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...  ',
        bedsize: 2,
        img: img2,
        bathsize: 3,
        price: "$5000",

    },
    {
        id: 3,
        title: 'Rustic Retreat Cottage',
        detail: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...   ',
        bedsize: 2,
        img: img3,
        bathsize: 3,
        price: "$5000",

    }
]
const testiomonia = [
    {
        id: 1,
        title: "Exceptional Service!",
        comments: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        avatar: avatar,
        nam: 'Wade Warren',
        occupa: "USA, California"

    },
    {
        id: 2,
        title: "Efficient and Reliable",
        comments: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
        avatar: avatar, 
        nam : 'Emelie Thomson',
        occupa: "USA, Florida"

    },
    {
        id: 2,
        title: "Efficient and Reliable",
        comments: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results. ",
        avatar: avatar,
        nam: 'Emelie Thomson',
        occupa: "USA, Florida"

    }
]
export {  faq, propData , testiomonia };