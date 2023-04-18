export default function showCurrentTime(request, response) {
  const currentDate = new Date()
  const currentTime = currentDate.toLocaleTimeString('pt-BR')
  response.json(currentTime)
}
