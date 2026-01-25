import React, { useState } from 'react';
import Button from '../components/Button';
import { ArrowUpRight, ChevronDown, Check, ArrowLeft } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
        console.error("Form error:", data);
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 animate-enter">
      
      {/* Header */}
      <div className="text-center mb-20 space-y-4">
        <h1 className="text-4xl md:text-6xl font-display uppercase font-bold text-ink">Contact</h1>
        <p className="text-stone text-lg font-light max-w-xl mx-auto font-sans">
            Inquiries regarding booking, press, and collaboration.
        </p>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-16 md:gap-24">
        
        {/* Contact Form Area */}
        <div>
          {isSubmitted ? (
            <div className="min-h-[500px] h-full flex flex-col items-center justify-center space-y-10 bg-white/50 border border-ink/5 p-12 text-center shadow-sm rounded-sm animate-enter backdrop-blur-sm">
                <div className="w-24 h-24 bg-spruce/10 rounded-full flex items-center justify-center mb-2">
                    <Check className="w-10 h-10 text-spruce" />
                </div>
                <div className="space-y-4 max-w-md mx-auto">
                  <h3 className="text-3xl md:text-4xl font-display uppercase text-ink tracking-wide">Message Sent</h3>
                  <p className="text-stone font-sans text-lg leading-relaxed">
                      Thank you for reaching out. We've received your inquiry and will get back to you soon.
                  </p>
                </div>
                <div className="pt-4">
                    <Button 
                        onClick={() => setIsSubmitted(false)} 
                        variant="ghost" 
                        className="border border-ink/20 text-ink hover:bg-ink hover:text-white hover:border-ink gap-3 px-8"
                    >
                        <ArrowLeft size={16} /> Return to Form
                    </Button>
                </div>
            </div>
          ) : (
            <form 
              className="space-y-12" 
              onSubmit={handleSubmit}
            >
                <input type="hidden" name="access_key" value="d04ae920-211f-4693-8335-2031861fc54f" />
                <input type="hidden" name="subject" value="New inquiry from DrewBordeaux.com" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                        <label className="text-xs uppercase tracking-widest text-stone/50 group-focus-within:text-spruce transition-colors font-sans font-bold">Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          className="w-full bg-transparent border-b border-ink/10 py-2 text-ink focus:outline-none focus:border-spruce transition-colors placeholder:text-stone/20 font-sans text-lg" 
                          placeholder="Jane Doe" 
                          required 
                        />
                    </div>
                    <div className="space-y-2 group">
                        <label className="text-xs uppercase tracking-widest text-stone/50 group-focus-within:text-spruce transition-colors font-sans font-bold">Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          className="w-full bg-transparent border-b border-ink/10 py-2 text-ink focus:outline-none focus:border-spruce transition-colors placeholder:text-stone/20 font-sans text-lg" 
                          placeholder="jane@example.com" 
                          required 
                        />
                    </div>
                </div>
                
                <div className="space-y-2 group">
                    <label className="text-xs uppercase tracking-widest text-stone/50 group-focus-within:text-spruce transition-colors font-sans font-bold">Inquiry Type</label>
                    <div className="relative">
                        <select name="inquiry_type" className="w-full bg-transparent border-b border-ink/10 py-2 pr-8 text-ink focus:outline-none focus:border-spruce transition-colors font-sans text-lg appearance-none cursor-pointer rounded-none">
                            <option className="bg-paper text-stone" value="Booking Request">Booking Request</option>
                            <option className="bg-paper text-stone" value="Press / Media">Press / Media</option>
                            <option className="bg-paper text-stone" value="Collaboration">Collaboration</option>
                            <option className="bg-paper text-stone" value="General">General</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone/50 group-focus-within:text-spruce transition-colors">
                            <ChevronDown size={16} />
                        </div>
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label className="text-xs uppercase tracking-widest text-stone/50 group-focus-within:text-spruce transition-colors font-sans font-bold">Message</label>
                    <textarea 
                      name="message" 
                      className="w-full bg-transparent border-b border-ink/10 py-2 text-ink focus:outline-none focus:border-spruce transition-colors placeholder:text-stone/20 font-sans text-lg min-h-[100px] resize-none" 
                      placeholder="Details about your inquiry..." 
                      required
                    ></textarea>
                </div>

                <div className="pt-4">
                    <Button className="px-12 py-4 text-xs w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </div>
            </form>
          )}
        </div>

        {/* Sidebar / Socials */}
        <div className="space-y-12 lg:pt-2">
            
            <div className="bg-white/5 border border-ink/5 p-8 backdrop-blur-sm">
                <h3 className="text-xs uppercase tracking-widest text-spruce font-semibold mb-6">Connect</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://www.instagram.com/drewsounds/" target="_blank" rel="noreferrer" className="flex items-center justify-between text-stone hover:text-ink transition-colors group border-b border-ink/5 pb-2 last:border-0">
                        <span className="font-display uppercase text-lg tracking-wide">Instagram</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-sand" />
                    </a>
                    <a href="https://open.spotify.com/artist/3FoGO6FW2T3cffSg7SSjaW" target="_blank" rel="noreferrer" className="flex items-center justify-between text-stone hover:text-ink transition-colors group border-b border-ink/5 pb-2 last:border-0">
                        <span className="font-display uppercase text-lg tracking-wide">Spotify</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-sand" />
                    </a>
                    <a href="https://music.apple.com/us/album/impulse-instinct/1568047199" target="_blank" rel="noreferrer" className="flex items-center justify-between text-stone hover:text-ink transition-colors group border-b border-ink/5 pb-2 last:border-0">
                        <span className="font-display uppercase text-lg tracking-wide">Apple Music</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-sand" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCUSz9wKZiBcLszzoiPAZ6EQ" target="_blank" rel="noreferrer" className="flex items-center justify-between text-stone hover:text-ink transition-colors group border-b border-ink/5 pb-2 last:border-0">
                        <span className="font-display uppercase text-lg tracking-wide">YouTube</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-sand" />
                    </a>
                </div>
            </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;