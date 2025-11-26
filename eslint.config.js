import React, { useState } from 'react';
import { BookOpen, Headphones, Star, Award, TrendingUp, Menu, X } from 'lucide-react';

export default function AmiraLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">O'qish AI</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600">Imkoniyatlar</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">Qanday ishlaydi</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600">Natijalar</a>
            </div>

            <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Boshlash
            </button>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <a href="#features" className="block py-2 text-gray-700">Imkoniyatlar</a>
              <a href="#how-it-works" className="block py-2 text-gray-700">Qanday ishlaydi</a>
              <a href="#results" className="block py-2 text-gray-700">Natijalar</a>
              <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-full">
                Boshlash
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI bilan O'qishni O'rganish
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sun'iy intellekt yordamida har bir bolaga shaxsiy o'qituvchi. 
            Real vaqtda tinglab, baholab va o'rgatamiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Bepul Boshlash
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
              Demo Ko'rish
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="bg-blue-100 rounded-2xl p-6 flex items-center space-x-4">
                    <Headphones className="w-12 h-12 text-blue-600" />
                    <div>
                      <h3 className="font-bold text-lg">Ovozli baholash</h3>
                      <p className="text-gray-600">20 daqiqada</p>
                    </div>
                  </div>
                  <div className="bg-purple-100 rounded-2xl p-6 flex items-center space-x-4">
                    <Star className="w-12 h-12 text-purple-600" />
                    <div>
                      <h3 className="font-bold text-lg">Shaxsiy o'rgatish</h3>
                      <p className="text-gray-600">Har bir bolaga</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold mb-2">Real vaqtda yordam</h3>
                  <p className="text-blue-100">AI har bir so'zni tinglaydi va darhol javob beradi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">68%</div>
              <p className="text-blue-100">Tezroq o'sish</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1M+</div>
              <p className="text-blue-100">Foydalanuvchilar</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20 daqiqa</div>
              <p className="text-blue-100">Baholash vaqti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Uchta Asosiy Imkoniyat
          </h2>
          <p className="text-xl text-gray-600">
            O'qishni o'rganishning to'liq tsikli
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Headphones className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Tez Baholash</h3>
            <p className="text-gray-600 mb-4">
              AI har bir so'zni tinglaydi, asosiy ko'nikmalarni tahlil qiladi va o'qish qiyinchiliklarini aniqlaydi - 20 daqiqadan kamroq vaqtda.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Ko'proq o'rganish →
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Shaxsiy Darslar</h3>
            <p className="text-gray-600 mb-4">
              AI o'qituvchining yordamchisi bo'lib, dars rejalarini tayyorlaydi va har bir bolaga mos keladigan tavsiyalar beradi.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Ko'proq o'rganish →
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Birma-bir O'rgatish</h3>
            <p className="text-gray-600 mb-4">
              Shaxsiy repetitor sifatida AI har bir bola bilan alohida ishlaydi, real vaqtda yordam beradi va o'qish qiyinchiliklarini bartaraf etadi.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Ko'proq o'rganish →
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gradient-to-b from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Qanday Ishlaydi
            </h2>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Bola Ovozli O'qiydi</h3>
                <p className="text-gray-600 text-lg">
                  Bola kitobni ovozli o'qiydi. AI har bir so'zni, intonatsiyani va telaffuzni tinglaydi.
                </p>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-6xl text-center">🎤</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Tahlil Qiladi</h3>
                <p className="text-gray-600 text-lg">
                  Sun'iy intellekt o'qish darajasini baholaydi, qiyinchiliklar va kuchli tomonlarni aniqlaydi.
                </p>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-6xl text-center">🤖</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">Shaxsiy Yordam</h3>
                <p className="text-gray-600 text-lg">
                  AI darhol javob beradi, xatolarni tuzatadi va bolani rag'batlantiradi. Har bir bolaga maxsus yondashuv!
                </p>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-6xl text-center">⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Ajoyib Natijalar
          </h2>
          <p className="text-xl text-gray-600">
            Millionlab bolalar bizning platformamiz orqali o'qishni o'rganmoqda
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <TrendingUp className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-bold mb-4">68% Tezroq O'sish</h3>
              <p className="text-blue-100 text-lg">
                Bizning platformadan foydalangan bolalar boshqa dasturlar bilan solishtirganda bir yil ichida 68% tezroq rivojlanadi.
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-8 backdrop-blur">
              <Award className="w-12 h-12 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Jahon miqyosida tan olingan</h4>
              <p className="text-blue-100">
                Ko'plab xalqaro mukofotlar va sertifikatlar bilan taqdirlangan
              </p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center">
              <Award className="w-12 h-12 text-blue-600" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bugun Boshlaymizmi?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bolangizga o'qishni sevishni o'rgating. Birinchi oy mutlaqo bepul!
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-blue-50 transition shadow-xl">
            Bepul Boshlash
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">O'qish AI</span>
              </div>
              <p className="text-gray-400">
                Har bir bolaga o'qishni o'rganish imkoniyati
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Havolalar</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Biz haqimizda</a></li>
                <li><a href="#" className="hover:text-white">Imkoniyatlar</a></li>
                <li><a href="#" className="hover:text-white">Narxlar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Yordam</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Aloqa</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Qo'llab-quvvatlash</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ijtimoiy tarmoqlar</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                  f
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500">
                  t
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700">
                  y
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 O'qish AI. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
