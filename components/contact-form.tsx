'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';

const EMAILJS_PUBLIC_KEY = "Ah9_xg8Ja_xmOUfo6";
const EMAILJS_SERVICE_ID = "service_c1w0i6o";
const EMAILJS_TEMPLATE_ID = "template_fgp5f7h";

emailjs.init("Ah9_xg8Ja_xmOUfo6");  

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    age: '',
    instagramUsername: '',
    currentCity: '',
    education: '',
    institution: '',
    workExperience: '',
    agentStatus: '',
    otherCompanyName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const educationOptions = [
    "Master's Degree",
    "Bachelor's Degree",
    "Diploma",
    "High School",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        to_name: "Admin",
        from_name: formData.name,
        from_email: formData.email,
        message: `
          Nama: ${formData.name}
          Email: ${formData.email}
          WhatsApp: ${formData.whatsapp}
          Umur: ${formData.age}
          Instagram: ${formData.instagramUsername}
          Kota: ${formData.currentCity}
          Pendidikan: ${formData.education}
          Institusi: ${formData.institution}
          Pengalaman Kerja: ${formData.workExperience}
          Status Agen: ${formData.agentStatus}
          ${formData.otherCompanyName ? `Perusahaan Lain: ${formData.otherCompanyName}` : ''}
        `.trim(),
        whatsapp: formData.whatsapp,
        age: formData.age,
        instagram: formData.instagramUsername,
        city: formData.currentCity,
        education: formData.education,
        institution: formData.institution,
        work_experience: formData.workExperience,
        agent_status: formData.agentStatus,
        other_company: formData.otherCompanyName || 'N/A'
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '', 
        email: '', 
        whatsapp: '', 
        age: '', 
        instagramUsername: '', 
        currentCity: '', 
        education: '', 
        institution: '', 
        workExperience: '', 
        agentStatus: '', 
        otherCompanyName: ''
      });

      alert('Form berhasil dikirim! Terima kasih.');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      alert('Gagal mengirim form. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 lg:py-24">
      <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-neutral-200/50 to-transparent [mask-image:radial-gradient(ellipse_at_left,black_10%,transparent_70%)]" />
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-neutral-200/50 to-transparent [mask-image:radial-gradient(ellipse_at_right,black_10%,transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-20 text-center"
            >
              <AnimatedShinyText
                className="text-xs sm:text-sm tracking-[0.3em] text-neutral-500 uppercase metallic-effect inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                shimmerWidth={200}
              >
                Formulir Pendaftaran
              </AnimatedShinyText>
              
              <div className="relative mt-3 sm:mt-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[1.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-instrument-serif italic 
                  leading-[1] sm:leading-[0.85] text-neutral-900 max-w-[95%] mx-auto"
                >
                  <span className="whitespace-nowrap">Bergabung dengan</span>
                  <br className="hidden sm:block" />
                  <span className="text-[1.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-instrument-serif 
                  leading-[1.1] sm:leading-[0.85] text-neutral-800 normal-case block sm:inline whitespace-nowrap">
                    Komunitas Eksklusif Kami
                  </span>
                </motion.h1>
              </div>
            </motion.div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700">1. Nama</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700">2. Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-700">3. Nomor WhatsApp</label>
              <Input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="mt-1 bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-neutral-700">4. Umur</label>
              <Input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="mt-1 bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="instagramUsername" className="block text-sm font-medium text-neutral-700">5. Real Account Instagram</label>
              <Input
                type="text"
                id="instagramUsername"
                name="instagramUsername"
                value={formData.instagramUsername}
                onChange={handleChange}
                required
                className="mt-1 bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="currentCity" className="block text-sm font-medium text-neutral-700">6. Kota Sekarang</label>
              <Input
                type="text"
                id="currentCity"
                name="currentCity"
                value={formData.currentCity}
                onChange={handleChange}
                required
                className="mt-1 bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="education" className="block text-sm font-medium text-neutral-700">7. Pendidikan Terakhir</label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
              >
                <option value="">Pilih Pendidikan</option>
                {educationOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="institution" className="block text-sm font-medium text-neutral-700">8. Institusi Pendidikan Terakhir</label>
              <Input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                required
                className="mt-1 bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="workExperience" className="block text-sm font-medium text-neutral-700">9. Pengalaman Kerja dan Jabatan</label>
              <Textarea
                id="workExperience"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                required
                rows={3}
                className="mt-1 bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                10. Apakah kamu/pasangan terdaftar sebagai agen di Allianz/di tempat lain?
              </label>
              <select
                name="agentStatus"
                value={formData.agentStatus}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400 text-neutral-700"
              >
                <option value="" className="text-neutral-700">Pilih Status</option>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
                <option value="Perusahaan Lain">Perusahaan Selain Allianz</option>
              </select>

              {formData.agentStatus === 'Perusahaan Lain' && (
                <Input
                  type="text"
                  name="otherCompanyName"
                  placeholder="Sebutkan nama perusahaan"
                  value={formData.otherCompanyName}
                  onChange={handleChange}
                  className="mt-2 bg-white border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400"
                />
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full px-6 py-6 text-lg tracking-[0.2em] bg-neutral-900 
              text-white hover:bg-neutral-800 transition-all duration-300 rounded-full 
              shadow-lg hover:shadow-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Form'}
            </Button>
          </form>

          {submitStatus === 'success' && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-600 text-center font-medium"
            >
              Form berhasil dikirim!
            </motion.p>
          )}
          
          {submitStatus === 'error' && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-red-600 text-center font-medium"
            >
              Gagal mengirim form. Silakan coba lagi.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
