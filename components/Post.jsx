
import Posts from './Posts'


const Post = [{
    id: 1,
    userName: 'test user one',
    userImage: 'https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png',
    userPic: 'https://media.istockphoto.com/id/1456035845/photo/laptop-stethoscope-and-doctor-writing-in-notebook-for-research-planning-or-medical-tech.webp?b=1&s=170667a&w=0&k=20&c=TqEEvzL5H40n34LyKjN6fo1NyXO6ovl2MfQHGWl5oLk=',
    caption: "this is a test post one ",
},
{
    id: 2,
    userName: 'test user two',
    userImage: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png',
    userPic: 'https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.webp?b=1&s=170667a&w=0&k=20&c=L6xi5VJG0gr3a40-i35k8XWcmglc5hlgYP-lSqdEd9s=',
    caption: "this is a test post tow ",
}
];

function post (){
    return(
        <div>
            {Post.map((p) => {
                return(
                    <Posts key={p.id} 
                    id={p.id}
                    userName={p.userName} 
                    userImage={p.userImage} 
                    userPic={p.userPic} 
                    caption ={p.caption}
                    />
                    )
                })}
        </div>
                
    )
}

export default post