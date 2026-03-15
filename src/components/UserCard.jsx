
const UserCard = ({user}) => {
    const{firstName,lastName,photoUrl,age,gender,about} = user;
    console.log(user)
  return (
 <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={user.photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + "" + lastName }</h2>
    {age && gender && <p>{age + ", "<+ gender }</p>}
    <p>{about}</p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">ignore</button>
            <button className="btn btn-primary">interested</button>

    </div>
  </div>
</div>
  )
}

export default UserCard
