import { useNavigate } from "react-router-dom";
import ImageContent from "../components/ImageContent";
import { experienceData } from "../data/experineceData";
import MainLayout from "../layout/MainLayout";

const Experience = () => {
    const navigate = useNavigate();

    return (
        <MainLayout>
            <div className="container mx-auto py-12">
                {Object.entries(experienceData).map(
                    ([propertyId, property], index) => (
                        <ImageContent
                            key={propertyId}
                            image={property.experiences[0].image}
                            title={property.propertyName}
                            description="Discover exciting places and attractions near this property."
                            buttonText="Explore Nearby"
                            imageLeft={index % 2 === 0}
                            imageHeight="h-[70vh]"
                            onButtonClick={() =>
                                navigate(`/property/${propertyId}/experience`)
                            }
                        />
                    )
                )}
            </div>
        </MainLayout>
    );
};

export default Experience;
