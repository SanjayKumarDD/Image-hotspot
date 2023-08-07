function ImageShow({image}){
    return <div> 
        {/* {image.id} */}
        <img src={image.urls.small} alt = {image.alt_descripction}/>
        </div>
}

export default ImageShow;