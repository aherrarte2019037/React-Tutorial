import { quoteText, titleCase } from '../../utils/string_formatter';
import './TestimonialCard.css'

interface TestimonialCardProps {
    image: string,
    name: string,
    country: string,
    job: string,
    company: string,
    children: JSX.Element,
}

function TestimonialCard(props: TestimonialCardProps) {
    const { image, name, country, job, company, children } = props;

    return (
        <div className="Testimonial-container">
            <img className='Testimonial-image' src={image} />
            <div className='Testimonial-content'>
                <h4 className='Testimonial-title'>
                    <strong>{titleCase(name)}</strong> in {titleCase(country)}
                </h4>
                <h4 className='Testimonial-title'>
                    {titleCase(job)} in <strong>{titleCase(company)}</strong>
                </h4>
                <div className='Testimonial-decription'>{children}</div>
            </div>
        </div>
    );
};

export default TestimonialCard;