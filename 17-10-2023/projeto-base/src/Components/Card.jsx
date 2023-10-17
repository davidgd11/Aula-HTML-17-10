export default function Card() {
    return (
        <div className="d-md-flex mt-4 justify-content-around">

            <div className="card col-md-5">
                <img className="card-img-top w-100" src="http://lorempixel.com.br/330/170/?1" alt="" />

                <div className="card-body"> 
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe magni amet doloremque. Deleniti, doloremque autem. Consequuntur, eos distinctio architecto beatae rerum reiciendis blanditiis, culpa alias voluptates expedita, deleniti praesentium?
                    </p>    
                </div>
            </div>

            <div className="card col-md-5">
                <img className="card-img-top w-100" src="http://lorempixel.com.br/330/170/?2" alt="" />
            

                <div className="card-body"> 
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe magni amet doloremque. Deleniti, doloremque autem. Consequuntur, eos distinctio architecto beatae rerum reiciendis blanditiis, culpa alias voluptates expedita, deleniti praesentium?
                    </p>
                </div>
            </div>
            
        </div>
        
    );
}