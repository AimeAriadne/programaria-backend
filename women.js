import { v4 as uuidv4 } from 'uuid'

const womenInTech = [
  {
    id: '1',
    name: 'Aime Ramalho',
    image: 'https://media.licdn.com/dms/image/C4D03AQHB6alVfbVsNQ/profile-displayphoto-shrink_800_800/0/1657972911559?e=1687392000&v=beta&t=hYVB5BBdtCfHycOaHaOxpt9lRDsKkU9AmUDK_pjjAOc',
    bio: 'Front-end developer',
  },
  {
    id: '2',
    name: 'Simara Conceição',
    image: 'https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_200_200/0/1563116714583?e=1687392000&v=beta&t=VybzAx9Hk7DVsl1PZmroImUBfHwmWqpIifylTLlP3A4',
    bio: 'LinkedIn Top Voice Tecnologia & Inovação | Desenvolvedora de Software na Thoughtworks',
  },
  {
    id: '3',
    name: 'Iana Chan',
    image: 'https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_200_200/0/1563383651406?e=1687392000&v=beta&t=7MnF1oVzWyvwEdscYvb6rph2_OoOVH4vaxKfeAKwUb4',
    bio: 'CEO & Founder da PrograMaria',
  },
  {
    id: '4',
    name: 'Luana Pimentel',
    image: 'https://media.licdn.com/dms/image/C4D03AQGo9pEAWnA3vw/profile-displayphoto-shrink_200_200/0/1580595733430?e=1687392000&v=beta&t=RctndkZNqXJ1slvcKtUSkq_uddmWKX9eR9o67EfiMDo',
    bio: 'Senior Staff Software Engineer at OLX Brasil',
  },
  {
    id: '5',
    name: 'Nina da Hora',
    image: 'https://media.licdn.com/dms/image/D4D03AQFfEO5sNww0sA/profile-displayphoto-shrink_200_200/0/1679701313082?e=1687392000&v=beta&t=QiBFa7vu4NTJ5WKMfFqXnuMxfLIlgWjCHqY4C6rtMn8',
    bio: 'AI Researcher - Algorithmic Justice & AI Responsible',
  },
]

function findWoman(request) {
  return womenInTech.find(woman => woman.id === request.params.id) 
}

export function showWoman(request, response) {
  const foundWoman = findWoman(request)
  if (foundWoman) {
    response.json(foundWoman)
  } else {
    response.status(404).json('Woman not found')
  }
}

export function showWomen(request, response) {
  response.json(womenInTech)
}

export function createWoman(request, response) {
  const newWoman = {
    id: uuidv4(),
    name: request.body.name,
    image: request.body.image,
    bio: request.body.bio,
  }

  womenInTech.push(newWoman)
  
  response.json(womenInTech)
}

export function editWoman(request, response) {
  const editedWoman = findWoman(request)

  if (editedWoman) {
    if (request.body.name) {
      editedWoman.name = request.body.name
    }
    if (request.body.image) {
      editedWoman.image = request.body.image
    }
    if (request.body.bio) {
      editedWoman.bio = request.body.bio
    }
    response.json(womenInTech)
  } else {
    response.status(404).json('Woman not found')
  }
}

export function deleteWoman(request, response) {
  const deletedWoman = findWoman(request)

  if (deletedWoman) {
    const updatedWomenInTech = womenInTech.filter(woman => woman !== deletedWoman)
    response.json(updatedWomenInTech)
  } else {
    response.status(404).json('Woman not found')
  }
}