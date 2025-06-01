

const RandomPage = () => {
    console.log(process.env.MONGO_URL)
    console.log(process.env.JWT_SECRET)
    console.log(process.env.NODE_ENV)
  return (
    <div>
      {process.env.MONGO_URL ? (
        <h1>DB successfully connect</h1>
      ):(
        <h1>Page note found 404</h1>
      )}
    </div>
  )
}

export default RandomPage
