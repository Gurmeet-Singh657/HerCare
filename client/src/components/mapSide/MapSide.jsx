import "./mapSide.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import OpenDialog from "../openDialog/OpenDialog.js";

const MapSide = () => {
    const navigate = useNavigate();
    const [openfilter, setOpenFilter] = useState(false);
    const handlefilter = () => {
        setOpenFilter(true);
    }
    const [Incident, setIncident] = useState(true);

    const handleIncidents = (status) => {
        setIncident(status);
    }
    return (
        <>
            <div className='mapside'>
                <div className='incidenttips'>
                    <div className={Incident ? 'togactive incidentsnearme' : 'incidentsnearme'} onClick={() => handleIncidents(true)}>Incidents</div>
                    <div className={!Incident ? 'togactive safetytips' : 'safetytips'} onClick={() => handleIncidents(false)}>Safety Tips</div>
                </div>
                {Incident && <><div className="incidenttitle">
                    Have you been sexually harassed?
                </div>
                    <div className="incidentdesc">
                        Join the 40000+ people who have shared their experiences to make public spaces safer. Sharing your experience helps us identify patterns and create safer spaces. Information is analysed to engage our communities to find solutions and hold our civic and police officials accountable to have better policies and infrastructure. Your information remains anonymous.
                    </div>
                    <div className="incidentbtn">
                        <button className="incidentsharebtn" onClick={() => navigate("/shareIncident-form")}>Share Your Incident Anonymously</button>
                    </div>
                    <div className="incidentshared">
                        <div className="incidentsharedtitle">Incidents shared by community</div>
                        <div className="filtersection1">
                            <button className="filterincidents" onClick={() => setOpenFilter(!openfilter)}>Filter</button>
                            <button className="clearincidents">Clear</button>
                        </div>
                    </div>
                    <div className="incidentscroller">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, rerum saepe! Esse suscipit quaerat nemo, harum omnis assumenda cupiditate! Sint temporibus, consequatur suscipit illum eveniet nemo libero ex impedit esse fugit itaque rem voluptatem perspiciatis iure hic iste placeat ullam laudantium explicabo nulla est beatae quaerat. Quae perspiciatis ducimus sapiente blanditiis, velit illum aspernatur quo tenetur impedit, dolorem in autem officia omnis rem consectetur corrupti sunt perferendis doloribus minus repellendus modi eius esse adipisci animi! Accusantium, dolorum aspernatur! Suscipit esse debitis soluta distinctio eaque, veniam dignissimos ab cum quasi. Obcaecati porro nemo illo aspernatur voluptatem repellat nisi laudantium reprehenderit explicabo distinctio iste odit, asperiores earum cupiditate commodi, consequuntur architecto, nobis cum enim itaque! Temporibus dolorem repellat qui cum vero provident alias fugiat repellendus neque ex obcaecati, voluptatem reiciendis nulla libero laudantium minus iusto facere sit? Vero dolore tempora earum, aliquid labore a quos voluptate doloribus illum architecto esse quaerat error sunt, animi voluptatum neque repellat in. Voluptatum illum iste incidunt fugiat quidem. Eius hic nemo odit cumque sapiente, itaque velit iusto corrupti culpa quidem nam voluptates iure? Error suscipit, excepturi minus quaerat ex doloribus fugiat. Harum quisquam odio, aliquid vero quo quasi pariatur id dolorem autem rem totam ratione minus quidem voluptas maxime aut quia itaque nisi repudiandae perferendis. Quasi qui suscipit sint reprehenderit modi illum optio iusto quisquam, enim accusamus repudiandae alias at ipsa aliquam nisi expedita commodi deleniti cumque provident minus quas praesentium, quos natus. Reiciendis nisi molestias debitis culpa et est consequuntur saepe quisquam at perferendis labore modi, esse similique voluptas expedita! Sequi odit laboriosam placeat, illum dolorum totam quidem suscipit dignissimos officiis eius quia nesciunt fugit culpa, illo tempore perferendis! Pariatur officia doloribus vitae molestiae? Mollitia obcaecati qui nam magnam pariatur consectetur laboriosam, rem deleniti, id, amet explicabo! Dolorum velit magnam odio error laborum tempore provident.
                    </div>
                </>}
                {!Incident && <><div className="Safetytipstitle">
                    How do you navigate public places safely?
                </div>
                    <div className="Safetytipsdesc">
                        Have you found a way out of a potentially traumatic experience? Have you identified ways to commute through your city safely? Tell us what you do for your safety so that others can do the same.
                    </div>
                    <div className="Safetytipsbtn">
                        <button className="Safetytipssharebtn" onClick={() => navigate("/shareIncident-form")}>Share Safety Tip Anonymously</button>
                    </div>
                    <div className="incidentshared">
                        <div className="incidentsharedtitle">Safety Tips shared by community</div>
                        <div className="filtersection1">
                            <button className="filterincidents" onClick={() => setOpenFilter(!openfilter)}>Filter</button>
                            <button className="clearincidents">Clear</button>
                        </div>
                    </div>
                </>}
            </div>
            {openfilter && <OpenDialog openfilter={openfilter} setOpenFilter={setOpenFilter} />}
        </>

    )
}

export default MapSide