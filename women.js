import womanModel from './womanModel.js'

function findWoman(request) {
  return womanModel.findById(request.params.id)
}

export async function showWoman(request, response) {
  try {
    const foundWoman = await findWoman(request)
    response.json(foundWoman)
  } catch (error) {
    response.json(error) 
  }
}

export async function showWomen(request, response) {
  try {
    const womenInTech = await womanModel.find()
    response.json(womenInTech)
  } catch (error) {
    response.json(error) 
  }  
}

export async function createWoman(request, response) {
  const newWoman = new womanModel({
    name: request.body.name,
    image: request.body.image,
    bio: request.body.bio,
    quote: request.body.quote,
  })

  try {
    const createdWoman = await newWoman.save()
    response.status(201).json(createdWoman)
  } catch (error) {
    response.json(error) 
  }
}

export async function editWoman(request, response) {
  try {
    const editedWoman = await findWoman(request)
  
    if (request.body.name) {
      editedWoman.name = request.body.name
    }
    if (request.body.image) {
      editedWoman.image = request.body.image
    }
    if (request.body.bio) {
      editedWoman.bio = request.body.bio
    }
    if (request.body.quote) {
      editedWoman.quote = request.body.quote
    }

    const updatedWoman = await editedWoman.save()
    response.json(updatedWoman)
  } catch (error) {
    response.json(error)
  }
}

export async function deleteWoman(request, response) {
  try {
    const deletedWoman = await womanModel.findByIdAndDelete(request.params.id)
    if (!deletedWoman) {
      response.status(404).json({ message: 'Woman not found' })
    } else {
      response.json({ message: 'Woman successfully deleted' })
    } 
  } catch (error) {
    response.json(error)
  }
}
