"use client"
import React, { useState, useRef, useEffect } from "react"
import {
  FaQuestionCircle,
  FaCreditCard,
  FaTruck,
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import Link from "next/link"

const faqs = [
  {
    category: "General Questions",
    icon: <FaQuestionCircle className="h-5 w-5 text-amber-700" />,
    items: [
      {
        question: "What types of furniture do you sell?",
        answer:
          "We offer a wide range of furniture, including sofas, beds, dining tables, chairs, storage units, office furniture, outdoor furniture, and home décor accessories.",
      },
      {
        question: "Do you have a showroom I can visit?",
        answer:
          "Currently, we are an online-only store. However, we provide detailed product descriptions, high-quality images, and videos to help you make informed choices.",
      },
      {
        question: "Do you offer customization options?",
        answer:
          "Yes, we provide customization options on selected furniture items, such as fabric, size, and color. Contact our customer support for more details.",
      },
      {
        question: "Do you offer eco-friendly furniture?",
        answer:
          "Yes, we offer a variety of eco-friendly furniture options made from sustainable materials like bamboo, reclaimed wood, and low-VOC finishes.",
      },
      {
        question: "Can I see the products before purchasing?",
        answer:
          "Unfortunately, we are an online-only store. However, we offer detailed product images, videos, and virtual 3D models to help you visualize the furniture in your space.",
      },
      {
        question: "Can I request a product catalog?",
        answer:
          "Yes, you can request a digital catalog by contacting our customer support, and we’ll send it to your email address.",
      },
    ],
  },
  {
    category: "Ordering and Payments",
    icon: <FaCreditCard className="h-5 w-5 text-amber-700" />,
    items: [
      {
        question: "How do I place an order?",
        answer:
          "Simply browse our catalog, add items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods, including credit/debit cards, PayPal, bank transfers, and cash on delivery (where applicable).",
      },
      {
        question: "Can I modify or cancel my order after placing it?",
        answer:
          "Yes, you can modify or cancel your order within 24 hours of placing it. Please contact our customer support team for assistance.",
      },
      {
        question: "Can I use gift cards for payment?",
        answer:
          "Yes, we accept gift cards as a payment method. You can enter the gift card code at checkout to redeem its value.",
      },
      {
        question: "How do I apply a discount code?",
        answer:
          "You can apply a discount code during checkout in the 'Apply Promo Code' section. Your discount will be applied to your total order amount.",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "Yes, we offer financing options through our partner services. You can select 'Pay Later' or 'Installments' at checkout to apply for financing.",
      },
    ],
  },
  {
    category: "Shipping and Delivery",
    icon: <FaTruck className="h-5 w-5 text-amber-700" />,
    items: [
      {
        question: "Do you deliver to my location?",
        answer: "We offer nationwide shipping. Enter your ZIP code during checkout to check availability in your area.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery times vary depending on your location and the product. In-stock items typically arrive within 5–7 business days, while customized furniture may take 2–4 weeks.",
      },
      {
        question: "What are the delivery charges?",
        answer:
          "Delivery charges depend on your location and order total. We offer free shipping on orders above $500. Shipping fees are calculated during checkout.",
      },
      {
        question: "Will you assemble the furniture upon delivery?",
        answer:
          "Yes, we offer free assembly services for most furniture items. Our delivery team will set up your furniture at no extra cost.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Currently, we only offer domestic shipping within the United States. However, we are working on expanding our international shipping options.",
      },
      {
        question: "Can I track my shipment?",
        answer:
          "Yes, once your order has shipped, you will receive a tracking number via email or SMS to monitor the delivery status.",
      },
    ],
  },
  {
    category: "Returns and Refunds",
    icon: <FaShieldAlt className="h-5 w-5 text-amber-700" />,
    items: [
      {
        question: "What is your return policy?",
        answer:
          "We accept returns within 14 days of delivery for unused and undamaged items in their original packaging. Custom-made products are non-refundable.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "Contact our customer support team with your order number and reason for return. We will guide you through the process.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refunds are processed within 7–10 business days after the returned item has been inspected and approved.",
      },
      {
        question: "Can I return customized furniture?",
        answer:
          "Unfortunately, customized or made-to-order furniture is non-returnable unless it is defective or damaged upon arrival.",
      },
      {
        question: "Do I have to pay for return shipping?",
        answer:
          "Return shipping fees are the responsibility of the customer, unless the item is defective or damaged. In such cases, we will cover the return shipping costs.",
      },
      {
        question: "How long does it take to process a return?",
        answer:
          "Once we receive your return, it typically takes 3–5 business days for our team to inspect the item and process the refund.",
      },
    ],
  },
  {
    category: "Product Care and Warranty",
    icon: <FaTools className="h-5 w-5 text-amber-700" />,
    items: [
      {
        question: "How do I care for my furniture?",
        answer:
          "Each product page includes care instructions specific to the material used. For general care, avoid direct sunlight, clean regularly, and use protective pads for surfaces.",
      },
      {
        question: "Do your products come with a warranty?",
        answer:
          "Yes, all our products come with a 1-year warranty against manufacturing defects. The warranty does not cover normal wear and tear or misuse.",
      },
      {
        question: "Can I purchase extended warranty for my furniture?",
        answer:
          "Yes, we offer an extended warranty program for selected items. You can add it during checkout or contact our customer service for more details.",
      },
      {
        question: "How can I file a warranty claim?",
        answer:
          "To file a warranty claim, please contact our customer support team with your order details and a description of the issue. Our team will assist you with the next steps.",
      },
      {
        question: "Can I use harsh chemicals on my furniture?",
        answer:
          "We recommend using mild cleaning solutions and avoiding harsh chemicals that can damage the finish or upholstery of your furniture. Always follow the care instructions provided.",
      },
      {
        question: "Do you offer furniture protection plans?",
        answer:
          "Yes, we offer furniture protection plans for select items, which provide coverage against stains, accidental damages, and fabric wear. Contact us for more details.",
      },
    ],
  },
  {
    category: "Customer Support",
    icon: <FaHeadset className="h-5 w-5 text-amber-700" />,
    items: [
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach us via email at support@example.com, call us at (555) 123-4567, or use the live chat feature on our website. Our support team is available Monday to Friday, 9 AM to 6 PM EST.",
      },
      {
        question: "Do you offer bulk discounts for large orders?",
        answer:
          "Yes, we offer special pricing for bulk orders. Please contact us with your requirements for a personalized quote.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Once your order is shipped, you will receive a tracking link via email or SMS to monitor its progress.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "To reset your password, click the 'Forgot Password' link on the login page, enter your registered email address, and follow the instructions sent to your inbox.",
      },
      {
        question: "Can I change my shipping address after placing an order?",
        answer:
          "If your order hasn't been shipped yet, we can update your shipping address. Please contact customer support as soon as possible to make the change.",
      },
      {
        question: "Do you offer virtual consultations for design advice?",
        answer:
          "Yes, we offer free virtual consultations with our design experts. You can schedule a session by contacting customer support.",
      },
    ],
  },
]


function FAQItem({
  faq,
  isOpen,
  toggleOpen,
}: {
  faq: { question: string; answer: string }
  isOpen: boolean
  toggleOpen: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div className="border border-border border-gray-700 overflow-hidden rounded-t-sm">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.question}`}
      >
        <span className="text-md font-semibold text-foreground">{faq.question}</span>
        {isOpen ? (
          <FaChevronUp className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
        ) : (
          <FaChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
        )}
      </button>
      <div
        id={`faq-${faq.question}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <div className="px-6 py-4 bg-muted/50 border-t border-border border-amber-300">
          <p className="text-muted-foreground">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredFaqs, setFilteredFaqs] = useState(faqs)

  useEffect(() => {
    // Initially open the first question in every category
    const initialOpenIndexes = faqs.map((category, categoryIndex) => categoryIndex * 100);
    setOpenIndex(initialOpenIndexes);
  }, []);

  const toggleFAQ = (categoryIndex: number, itemIndex: number) => {
    const questionIndex = categoryIndex * 100 + itemIndex;
  
    // If the same question is clicked, it will close, otherwise, it opens and closes others.
    setOpenIndex((prev) => (prev[0] === questionIndex ? [] : [questionIndex]));
  };

  useEffect(() => {
    const filtered = faqs
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      }))
      .filter((category) => category.items.length > 0)
    setFilteredFaqs(filtered)
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div
        className="h-64 sm:h-72 md:h-80 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Find answers to common questions about our furniture, delivery, and services.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="relative">
          {/* Custom Arrows */}

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: "#prev-btn",
              nextEl: "#next-btn",
            }}
            modules={[Pagination, Navigation]}
            className="mb-8"
          >

            <div className="space-y-6">
              {filteredFaqs.map((category, index) => (
                <SwiperSlide key={index} className="pb-10">
                  <div className="bg-card text-card-foreground rounded-lg shadow-sm">
                    <div className="flex items-center justify-between py-4">
                      <div className="flex gap-2 items-center">
                        <div className="p-2 bg-amber-100 rounded-lg">{category.icon}</div>
                        <h2 className="text-xl font-semibold text-gray-800">{category.category}</h2>
                      </div>
                      <div className="flex gap-3 items-center">
                        <button
                          className="bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                          id="prev-btn"
                        >
                          <FaArrowLeft className="text-2xl text-gray-800" />
                        </button>
                        <button
                          className="bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                          id="next-btn"
                        >
                          <FaArrowRight className="text-2xl text-gray-800" />
                        </button>
                      </div>
                    </div>
                    <div className="divide-y divide-border border border-black rounded-lg">
                      {category.items.map((item, itemIndex) => (
                        <FAQItem
                          key={itemIndex}
                          faq={item}
                          isOpen={openIndex.includes(index * 100 + itemIndex)}
                          toggleOpen={() => toggleFAQ(index, itemIndex)}
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-amber-50 rounded-xl text-center">
        <div className="py-16">
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Please contact our customer support team.
          </p>
          <Link href="/Contact">
          <button className="bg-amber-200 text-amber-foreground px-6 py-2 rounded-lg hover:bg-amber-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
            Contact Support
          </button>
          </Link>
        </div>
        </div>

      </div>
    </div>
  )
}
