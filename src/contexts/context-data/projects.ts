type Paragraphs = {
        image: string,
        title: {
            pt: string,
            en: string
        }
        text?: {
            pt: string[]
            en: string[]
        }
} 

export type ProjectType = {
    id: string,
    title: {
        pt: string,
        en: string,
    },
    description: {
        pt: string[],
        en: string[]
    },
    links: {
        github: string,
        website?: string
    }
    image: string,
    stack?: string[],
    about?: Paragraphs[]
}

export const projects: ProjectType[] = [
    {
        id: 'ch3catalogue',
        title: {
            pt: "Catálogo Ch3",
            en: "Ch3 Catalogue"
        },
        description: {
            pt: [
                "Loja online desenvolvida para empresa CH3 LTDA.",
                `Os produtos disponíveis na loja acompanha o estoque do software local da mesma, facilitando o processo de pedidos de clientes.`
            ],
            en: [
                "An online store developed for the company CH3 LTDA.",
                "The avaiable products in the store keeps up with the avaiable stock from the company's software, makign client ordering process much easier."
            ]
        },
        links: {
            github: "https://github.com/henriquechagasg/catalogoch32.0", 
            website: "https://catalogoch3.store"
        },
        image: "https://res.cloudinary.com/myuploads/image/upload/v1623238166/Portfolio/catalogoon_g7fc9f.png",
        stack: ["Next.js", "React", "Typescript", "mongoDB", "Node.js", "Python"],
        about: [
                { 
                image: "https://res.cloudinary.com/myuploads/image/upload/v1626356202/Portfolio/gifs/ch3catalogue/serverside_1_bsss2h.gif",
                title: {
                    pt: "Server Side Rendering",
                    en: "Server Side Rendering"
                },
                text: {
                    pt: [
                        "Com o framework Next.js foi possível realizar o carregamento dos produtos do lado do servidor.",
                        "Basicamente, quando o usuário acessa a página, as informações que serão dispostas pra ele já estão carregadas, diminuindo drásticamente o tempo necessário para página ser 'montada'."
                    ], 
                    en: [
                        "With Next.js framework I could make that page loads on server side.",
                        "Basically, when a user visit the page the data for that request is already loaded, decreasing significantly the time necessary to load the page."
                    ]
                }
        },
        {
            image: "https://res.cloudinary.com/myuploads/image/upload/v1626356202/Portfolio/gifs/ch3catalogue/realtimestock_am1v1t.gif",
            title: {
                pt: "Estoque em tempo real",
                en: "Real time stock"
            },
            text: {
                pt: [
                    "A aplicação se comunica com o banco de dados do software da empresa, assim a quantidade de produtos disponíveis atualiza automáticamente, mesmo que ocorra uma venda presencial."
                ],
                en: [
                    "The application is sort of connected with the company database, so the quantity of products avaiable updates automatically, even if a sale takes place in the physical store."
                ]
            }
            },
        {
            image: "https://res.cloudinary.com/myuploads/image/upload/v1626356203/Portfolio/gifs/ch3catalogue/addtocart_pu9w7r.gif",
            title: {
                pt: "Adicionando produtos ao carrinho",
                en: "Adding products to cart"
            }
        },
        {           
            image: "https://res.cloudinary.com/myuploads/image/upload/v1626356202/Portfolio/gifs/ch3catalogue/sendorder_1_rmf8o6.gif",
            title: {
                pt: "Envio de pedidos",
                en: "Sending order" 
            }
        }
        ]
    },
    {
        id: 'portfolio',
        title: {
            pt: "Portfólio",
            en: "Portfolio"
        },
        description: {
            pt: ["Portfólio construído com React que possui seu próprio player de músicas."],
            en: ["A portfolio built in React that has your on music player."]
        },
        links: {
            github: "https://github.com/henriquechagasg/portfolio"

        },
        image: "https://res.cloudinary.com/myuploads/image/upload/v1625833693/Portfolio/portfolio_a08fb4.jpg",
        stack: ["Next.js", "Typescript", "React"],
        about: [
            {
                image: "https://res.cloudinary.com/myuploads/image/upload/v1626357035/Portfolio/gifs/portfolio/musicplayer_fbx3ti.gif",
                title: {
                    pt: "Player",
                    en: "Music Player"
                },
                text: {
                    pt: [
                        `Uma das coisas que mais curti fazer até hoje. Antes de estudar programação pensava ser algo impossível de desenvolver, e que precisaria de toda uma equipe pra isso.
Quando vi que era possível codar toda a lógica do player do inicio ao fim, fiquei muito entusiasmado e dediquei de coração ao projeto.`
                    ], 
                    en: [
                        `One of the applications I most enjoyed creating. I used to tought that this must be something impossible to develop, and that requires a whole team to do it.
When I realyze I could code the entire player logic by my own using React,  I got really excited and puted all my heart into it.`
                    ]
                }
            }
        ]
    },
    {
        id: 'gameplay',
        title: {
            pt: "GamePlay",
            en: "GamePlay",
        },
        description: {
            pt: [
                `App feito com React Native, onde o usuário se conecta com sua conta do discord, 
e então consegue agendar datas e horários para se conectar com seus amigos nos servidores do discord.`
            ],
            en: [
                `App built in React Native where users connect with their discord account, so they can
schedule dates for connecting with friends on discord servers.`
            ]
        },
        links: {
            github: "https://github.com/henriquechagasg/gameplay"
        },
        image: "https://res.cloudinary.com/myuploads/image/upload/v1625835991/Portfolio/GamePlay_igju1y.png", 
        stack: ["React Native", "Typescript", "Expo"], // adicionar Expo
        about: [
            {
                image: "https://res.cloudinary.com/myuploads/image/upload/v1626378638/Portfolio/gifs/gameplay/loginwithdiscord2_bavacv.gif",
                title: {
                    pt: "Autenticação com Discord",
                    en: "Discord authentication" 
                },
                text: {
                    pt:[
                        "O app permite que usuário se conecte com sua conta do discord, e busca quais servidores aquele usuário faz parte."
                    ],
                    en: [
                        "The app allows the user to connect with discord account, and return the servers that user is participating"
                    ] 
                }
            },
            {
                image: "https://res.cloudinary.com/myuploads/image/upload/v1626378639/Portfolio/gifs/gameplay/matchscheduling_xsxvzo.gif",
                title: {
                    pt: "Agendamento de partidas",
                    en: "Match scheduling"
                },
                text: {
                    pt: [
                        "Após autenticado, o usuário pode agendar datas e horários para se conectar com seus amigos."
                    ],
                    en: [
                        "Once authenticated, users can schedule dates for connecting with their friends."
                    ] 
                }
            }
        ]
    }, 
    {
        id: 'wppbot',
        title: {
            pt: "Whatsapp Bot",
            en: "Whatsapp Bot"
        },
        description: {
            pt: ["Bot criado pra empresa CH3 LTDA usando a biblioteca do github venom-bot."],
            en: ["Bot built for the company CH3 LTDA using venom-bot github library."]
        },
        links: {
            github: "https://github.com/henriquechagasg/ch3bot"
        },
        image : "https://res.cloudinary.com/myuploads/image/upload/v1626381654/Portfolio/wppbot_qu9ice.jpg",
        stack: ["Typescript"],
        about: [
            {
                image: "https://res.cloudinary.com/myuploads/image/upload/v1626386752/Portfolio/gifs/wppbot/automaticresponse_m6zcwl.gif",
                title: {
                    pt: "Respostas Automáticas",
                    en: "Auto responses"
                },
                text: {
                    pt: [
                        `O Bot foi criado para a empresa CH3. Como a empresa possui clientes tanto no atacado como no varejo,
    a intensão é que o bot pudesse agilizar o processo de compra de um cliente de atacado.`
                    ],
                    en: [
                        `The bot was built for the company CH3. As the company is a wholesale and retail commerce, the point of the bot is facilitate
wholesale clients attendance.`
                    ] 
                }
            },
            {
                image: "https://res.cloudinary.com/myuploads/image/upload/v1626386752/Portfolio/gifs/wppbot/apiconsuming_nqx6qt.gif ",
                title: {
                    pt: "Integração com dados da receita",
                    en: "Integrated with government data"
                },
                text: {
                    pt: [
                        `A política da empresa exige que para comprar no atacado o cliente possua um CNPJ do setor do vestuário. Portanto, quando o cliente envia
    seu CNPJ, o bot consulta a API da receita e confere se o cliente atende às exigências. Se estiver tudo bem, enviamos para ele o link para o catálogo online, onde o cliente poderá efetuar seus pedidos.`
                    ],
                    en: [
                        `Company policies requires that wholesale clients have a CNPJ (It's the business ID in Brazil) that is registered on clothing sector. So when the client sends 
the CNPJ, the bot checks with government API if the clients satisfy the requirements. If everything is all right, a link for the company online catalogue is sended.`
                    ] 
                }
            }
        ]
    }

]