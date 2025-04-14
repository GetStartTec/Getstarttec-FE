import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mobileNumber: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Your query has been submitted!');
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '', mobileNumber: '' });
  };

  const testimonials = [
    {
      quote: '“Absolutely loved their service!”',
      author: 'Yoha Raj',
      rating: 5,
      image: `${process.env.PUBLIC_URL}/images/client-1.png`,
    },
    {
      quote: '“Quick response and professional team.”',
      author: 'Danish',
      rating: 4,
      image: `${process.env.PUBLIC_URL}/images/client-2.jpg`,
    },
    {
      quote: '“Highly recommend them to everyone.”',
      author: 'Anjali Mehta',
      rating: 5,
      image: `${process.env.PUBLIC_URL}/images/client-1.png`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-2">Request A Quote</h1>
      <p className="text-center text-red-600 font-semibold mb-6">
        (435) 631-9968 | hello@bigredjelly.com
      </p>

      <form className="bg-white shadow-md rounded-2xl p-8 space-y-6" onSubmit={handleSubmit}>
        <p className="text-center text-lg font-medium">
          Complete our form and receive a free quote on how we can help brand, build and grow your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="First Name*" required />
          <Input placeholder="Last Name*" required />
          <Input
            placeholder="Your Email"
            type="email"
            value={formData.email}
            onChange={(e:any) => handleChange('email', e.target.value)}
            required
          />
          <Input
            placeholder="Mobile Number"
            type="tel"
            value={formData.mobileNumber}
            onChange={(e:any) => handleChange('mobileNumber', e.target.value)}
          />
          <Input placeholder="Website URL" />
          <Input placeholder="Company name" />
        </div>

        <div>
          <p className="font-medium mb-2">What can we do for you?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              'Branding',
              'Brand Strategy & Growth',
              'Web Design & Development',
              'Web Support',
              'Marketing & Advertising',
              'Sales Enablement',
              'Hosting, Domains & Web Services',
              'Other',
            ].map((service) => (
              <label key={service} className="flex items-center space-x-2">
                <Checkbox id={service} />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">Additional comments</label>
          <Textarea
            className="w-full"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={(e:any) => handleChange('message', e.target.value)}
            required
          />
        </div>

        <div>
          <p className="font-medium mb-2">What is your estimated budget?</p>
          <RadioGroup>
            {[
              '$0 - $1,000',
              '$1,000 - $10,000',
              '$10,000 - $25,000',
              '$25,000 - $75,000',
              '$75,000+',
            ].map((budget) => (
              <label key={budget} className="flex items-center space-x-2">
                <RadioGroupItem value={budget} id={budget} />
                <span>{budget}</span>
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="text-center">
          <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
            Submit
          </Button>
        </div>
      </form>

      {/* Displaying Testimonials Only After Form Submission */}
      {isSubmitted && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-xl text-center shadow-md"
              >
                <div className="text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < testimonial.rating ? '★' : '☆'}</span>
                  ))}
                </div>
                <p className="italic mb-4">{testimonial.quote}</p>
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
