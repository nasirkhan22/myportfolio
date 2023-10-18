const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Comsats University Isalmabad Abbottabad Campus',
                degree: 'BS, Software Engineering',
                detail: "Bachelor's Degree in Software Engineering from Comsats Abbottabad.",
                year: '2018-2022'
            },
            {
                id: 1,
                title: 'Peshawar Model Degree College',
                degree: 'HSSC, Pre Engineering',
                detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
                year: '2016-2018'
            },
            {
                id: 2,
                title: 'Iqra Model School',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Iqra Model School Lower Dir Timergara",
                year: '2014-2016'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'JMM Technologies',
                role: 'Junior Frontend Developer',
                url: 'https://jmm.ltd/',
                desc: 'As a junior frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '01/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '05/2022 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
