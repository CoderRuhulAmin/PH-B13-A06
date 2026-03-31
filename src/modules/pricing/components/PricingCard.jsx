import PricingSingleCard from './PricingSingleCard';

const PricingCard = ({pricingPlans}) => {
    // console.log(pricingPlans)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            pricingPlans.map((plan) => {
                return <PricingSingleCard key={plan.id} plan={plan} />
            })
        }
        </div>
    );
};

export default PricingCard;