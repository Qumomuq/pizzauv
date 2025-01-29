 const product = [
    {
        "id": 0,
        "name": "Пицца",
        "items":
            [
                {
                    "id": 0,
                    "name": "4 сезона",
                    "description": `Пицца из четырёх видов с разными начинками:\/nПепперони, Сырная, Грибная, Маргарита`,
                    "descriptionFull": `Пицца из четырёх видов с разными начинками:\/n 
                        Пепперони - сыр и колбаски пепперони согревают душу\/n
                        Сырная – нежное сочетание 4 видов сыра\/n
                        Грибная – томаты, бекон и грибы политы сливочно-кунжутным соусом\/n
                        Маргарита – сочные ароматные помидоры под сливочным сыром моцарелла`,
                    "price": 3000,
                    "image": "./",
                    "properties": {
                        "new": false,
                        "hit": false
                    }
                },
                 {
                     "id": 1,
                     "name": "Бекон",
                     "description": "Нежный бекон с ветчиной, запечённые под сыром моцарелла, с добавлением ароматного орегано",
                     "descriptionFull": "Нежный бекон с ветчиной, запечённые под сыром моцарелла, с добавлением ароматного орегано",
                     "price": 34000,
                     "image": "",
                     "properties": {
                         "new": true,
                         "hit": false
                     }
                 },
                {
                    "id": 2,
                    "name": "Гавайская",
                    "description": "Обжаренная ароматная курочка с сочными кусочками ананаса, запечённая под сыром моцарелла, придает этой пицце экзотический вкус. Сверху полита сладким чили",
                    "descriptionFull": "Обжаренная ароматная курочка с сочными кусочками ананаса, запечённая под сыром моцарелла, придает этой пицце экзотический вкус. Сверху полита сладким чили",
                    "price": 3000,
                    "image": "",
                    "properties": {
                        "new": false,
                        "hit": false
                    }
                },
                {
                    "id": 3,
                    "name": "Грибная",
                    "description": "Бекон, жаренные грибочки и свежие томаты запечённые под сыром моцарелла, сверху поливаются ароматным сливочно-кунжутным соусом",
                    "descriptionFull": "Бекон, жаренные грибочки и свежие томаты запечённые под сыром моцарелла, сверху поливаются ароматным сливочно-кунжутным соусом",
                    "price": 34000,
                    "image": "",
                    "properties": {
                        "new": true,
                        "hit": false
                    }
                },
                {
                    "id": 4,
                    "name": "Двойной цыплёнок",
                    "description": "Ещё больше курицы! Нежное куриное филе под сыром моцарелла, посыпанное ароматным орегано. Сверху поливается соусом барбекю",
                    "descriptionFull": "Ещё больше курицы! Нежное куриное филе под сыром моцарелла, посыпанное ароматным орегано. Сверху поливается соусом барбекю",
                    "price": 3000,
                    "image": "",
                    "properties": {
                        "new": false,
                        "hit": false
                    }
                },
                {
                    "id": 5,
                    "name": "Жюльен",
                    "description": "Нежные кусочки куриного мяса, жаренные грибочки и сливочный сыр моцарелла, запечённые на соусе бешамель и посыпанные ароматным орегано",
                    "descriptionFull": "Нежные кусочки куриного мяса, жаренные грибочки и сливочный сыр моцарелла, запечённые на соусе бешамель и посыпанные ароматным орегано",
                    "price": 34000,
                    "image": "",
                    "properties": {
                        "new": true,
                        "hit": false
                    }
                },
                {
                    "id": 6,
                    "name": "Классика",
                    "description": "Аппетитная ветчина и кусочки свежих томатов, заправленные фирменным томатным соусом, запекаются под сыром моцарелла",
                    "descriptionFull": "Аппетитная ветчина и кусочки свежих томатов, заправленные фирменным томатным соусом, запекаются под сыром моцарелла",
                    "price": 3000,
                    "image": "",
                    "properties": {
                        "new": false,
                        "hit": false
                    }
                },
                {
                    "id": 7,
                    "name": "Морская",
                    "description": "Особое сочетание гребешка, креветок и снежного краба на белом соусе. Сыры придают особую нежность, а сушеная морская капуста подчеркивает вкус морепродуктов",
                    "descriptionFull": "Особое сочетание гребешка, креветок и снежного краба на белом соусе. Сыры придают особую нежность, а сушеная морская капуста подчеркивает вкус морепродуктов",
                    "price": 34000,
                    "image": "",
                    "properties": {
                        "new": true,
                        "hit": false
                    }
                },
                {
                    "id": 8,
                    "name": "Охотничья",
                    "description": "Охотничьи колбаски с хрустящими солёными огурчиками под сыром моцарелла",
                    "descriptionFull": "Охотничьи колбаски с хрустящими солёными огурчиками под сыром моцарелла",
                    "price": 3000,
                    "image": "",
                    "properties": {
                        "new": false,
                        "hit": false
                    }
                },
                {
                    "id": 9,
                    "name": "Пепперони",
                    "description": "Колбаса пепперони в сочетании с фирменным томатным соусом двумя видами сыра не оставит вас равнодушными",
                    "descriptionFull": "Колбаса пепперони в сочетании с фирменным томатным соусом двумя видами сыра не оставит вас равнодушными",
                    "price": 34000,
                    "image": "",
                    "properties": {
                        "new": true,
                        "hit": false
                    }
                },
                {
                    "id": 10,
                    "name": "Пикантная",
                    "description": "Ароматная грудинка, обжаренная с томатами, болгарским перцем, репчатым луком и пикантным соусом, запекается под сыром моцарелла. По-настоящему острая пицца",
                    "descriptionFull": "Ароматная грудинка, обжаренная с томатами, болгарским перцем, репчатым луком и пикантным соусом, запекается под сыром моцарелла. По-настоящему острая пицца",
                    "price": 3000,
                    "image": "",
                    "properties": {
                        "new": false,
                        "hit": false
                    }
                },
                {
                    "id": 11,
                    "name": "Сырная",
                    "description": "Особое сочетание четырёх видов горячего сыра с фирменным красным соусом",
                    "descriptionFull": "Особое сочетание четырёх видов горячего сыра с фирменным красным соусом",
                    "price": 34000,
                    "image": "",
                    "properties": {
                        "new": true,
                        "hit": false
                    }
                },
                {
                    "id": 12,
                    "name": "Фермерская",
                    "description": "Ароматная грудинка, обжаренная с томатами, болгарским перцем и репчатым луком, запекается под сыром моцарелла. Сверху поливается сладким чили",
                    "descriptionFull": "Ароматная грудинка, обжаренная с томатами, болгарским перцем и репчатым луком, запекается под сыром моцарелла. Сверху поливается сладким чили",
                    "price": 34000,
                    "image": "",
                    "properties": {
                        "new": true,
                        "hit": false
                    }
                },
                {
                    "id": 13,
                    "name": "Чизбургер",
                    "description": "Аппетитный мясной фарш, обжаренный с лучком, свежие томаты и соленые огурчики в сочетании с двумя видами фирменных соусов и двух видов сыра. Сверху поливается соусом гуакамоле",
                    "descriptionFull": "Аппетитный мясной фарш, обжаренный с лучком, свежие томаты и соленые огурчики в сочетании с двумя видами фирменных соусов и двух видов сыра. Сверху поливается соусом гуакамоле",
                    "price": 34000,
                    "image": "",
                    "properties": {
                        "new": true,
                        "hit": false
                    }
                },
                {
                    "id": 14,
                    "name": "Южные ворота",
                    "description": "Сочные кусочки свинины и свежие томаты в сочетании с двумя фирменными соусами и двумя видами сыра, посыпанные хрустящим луком",
                    "descriptionFull": "Сочные кусочки свинины и свежие томаты в сочетании с двумя фирменными соусами и двумя видами сыра, посыпанные хрустящим луком",
                    "price": 34000,
                    "image": "",
                    "properties": {
                        "new": true,
                        "hit": false
                    }
                },
            ]
    },
    {
        "id": 1,
        "name": "Кесадилья",
        "items":
            [
                {
                    "id": 0,
                    "name": "Кесадилья",
                    "description": "Нежное куриное филе, свежие огурчики и томаты, а также омлет тамаго и сыр моцарелла выполняется на фирменном соусе и со сливочным сыром моцарелла",
                    "descriptionFull": "Нежное куриное филе, свежие огурчики и томаты, а также омлет тамаго и сыр моцарелла выполняется на фирменном соусе и со сливочным сыром моцарелла",
                    "price": 3000,
                    "image": "",
                    "properties": {
                        "new": false,
                        "hit": false
                    }
                },
                {
                    "id": 1,
                    "name": "Кесадилья",
                    "description": "Сочные обжаренные кусочки свинины, свежие томаты, хрустящие соленые огурчики и омлет тамаго в сочетании с фирменным и медово-горчичным соусом и сыром моцарелла",
                    "descriptionFull": "Сочные обжаренные кусочки свинины, свежие томаты, хрустящие соленые огурчики и омлет тамаго в сочетании с фирменным и медово-горчичным соусом и сыром моцарелла",
                    "price": 34000,
                    "image": "",
                    "properties": {
                        "new": true,
                        "hit": false
                    }
                },
            ]
    },
]

export default product


