import { useParams } from "react-router-dom";
import ImageContent from "../components/ImageContent";
import { experienceData } from "../data/experineceData";
import MainLayout from "../layout/MainLayout";

const PropertyExperience = () => {
    const { id } = useParams();
    const property = experienceData[id as keyof typeof experienceData];

    if (!property) {
        return (
            <div className="text-center py-20 text-gray-500">
                No experiences found.
            </div>
        );
    }

    return (
        <MainLayout>
            <div className="container mx-auto py-12 px-4 md:px-10">
                <h2 className="text-3xl font-medium text-center mb-12">
                    Nearby Experiences at {property.propertyName}
                </h2>

                {property.experiences.map((item, index) => (
                    <ImageContent
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        imageLeft={index % 2 === 0}
                        imageHeight="h-[60vh]"
                    />
                ))}
            </div>
        </MainLayout>
    );
};

export default PropertyExperience;
