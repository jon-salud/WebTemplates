import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import type { IndustryConfig } from '@/config/industries';

interface ContactFormProps {
  industry: IndustryConfig;
  variant?: 'default' | 'minimal' | 'detailed';
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  industry,
  variant = 'default',
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const validateField = (field: keyof FormErrors, value: string) => {
    let error = '';

    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (value && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(value)) {
          error = 'Please enter a valid phone number';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error || undefined }));
    return error === '';
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.phone && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getInputClasses = (fieldName: keyof FormErrors) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `
      w-full px-4 py-3 rounded-xl border
      text-neutral-800 placeholder:text-neutral-400
      focus:outline-none focus:ring-2 focus:border-transparent
      transition-all duration-200
      ${
        hasError
          ? 'border-red-300 focus:ring-red-200 bg-red-50'
          : 'border-neutral-200 focus:ring-opacity-20'
      }
    `;
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle
            className="w-16 h-16 mx-auto mb-4"
            style={{ color: industry.colors.primary }}
          />
        </motion.div>
        <h3 className="text-heading-2 text-brand-black mb-2">Thank You!</h3>
        <p className="text-body text-neutral-600 mb-6">
          We've received your message and will get back to you within 24 hours.
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              service: '',
              message: '',
            });
            setErrors({});
            setTouched({});
          }}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name')}
            placeholder="John Smith"
            className={getInputClasses('name')}
            style={{ '--tw-ring-color': industry.colors.primary } as React.CSSProperties}
            aria-invalid={touched.name && errors.name ? 'true' : 'false'}
            aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
          />
          {touched.name && errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              id="name-error"
              className="mt-1 text-sm text-red-600 flex items-center gap-1"
              role="alert"
            >
              <span className="text-red-600">⚠</span>
              {errors.name}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email')}
            placeholder="john@example.com"
            className={getInputClasses('email')}
            style={{ '--tw-ring-color': industry.colors.primary } as React.CSSProperties}
            aria-invalid={touched.email && errors.email ? 'true' : 'false'}
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              id="email-error"
              className="mt-1 text-sm text-red-600 flex items-center gap-1"
              role="alert"
            >
              <span className="text-red-600">⚠</span>
              {errors.email}
            </motion.p>
          )}
        </div>
      </div>

      {variant !== 'minimal' && (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur('phone')}
              placeholder="+1 (234) 567-890"
              className={getInputClasses('phone')}
              style={{ '--tw-ring-color': industry.colors.primary } as React.CSSProperties}
              aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
              aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
            />
            {touched.phone && errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                id="phone-error"
                className="mt-1 text-sm text-red-600 flex items-center gap-1"
                role="alert"
              >
                <span className="text-red-600">⚠</span>
                {errors.phone}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className={getInputClasses('name')}
              style={{ '--tw-ring-color': industry.colors.primary } as React.CSSProperties}
            />
          </div>
        </div>
      )}

      {variant === 'detailed' && (
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={getInputClasses('name')}
            style={{ '--tw-ring-color': industry.colors.primary } as React.CSSProperties}
          >
            <option value="">Select a service</option>
            {industry.services.items.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={variant === 'minimal' ? 3 : 5}
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          placeholder="Tell us about your needs..."
          className={`${getInputClasses('message')} resize-none`}
          style={{ '--tw-ring-color': industry.colors.primary } as React.CSSProperties}
          aria-invalid={touched.message && errors.message ? 'true' : 'false'}
          aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
        />
        {touched.message && errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            id="message-error"
            className="mt-1 text-sm text-red-600 flex items-center gap-1"
            role="alert"
          >
            <span className="text-red-600">⚠</span>
            {errors.message}
          </motion.p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          style={{ backgroundColor: industry.colors.primary }}
        >
          <Button
            variant="primary"
            size="lg"
            fullWidth
            loading={isSubmitting}
            icon={<Send className="w-5 h-5" />}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </button>
      </div>

      <p className="text-body-sm text-neutral-500 text-center">
        By submitting this form, you agree to our{' '}
        <a href="#" className="underline hover:text-neutral-700">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default ContactForm;
