import { useState } from 'react';
import { Rocket, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import FlowChart from '../components/FlowChart';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Rocket className="h-8 w-8 text-primary" />
              <a href="#" className="text-lg font-semibold">NeetCode</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-primary">Courses</a>
              <a href="#" className="hover:text-primary">Practice</a>
              <a href="#" className="hover:text-primary">Roadmap</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">Pro</Button>
              <Button variant="ghost">Sign in</Button>
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4">NeetCode</h1>
            <p className="text-xl mb-8">A better way to prepare for coding interviews</p>
            <Button className="bg-green-500 text-white hover:bg-green-600">Get Pro</Button>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Interview Preparation Roadmap</h2>
            <FlowChart />
          </section>

          <section className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-8">Why Choose NeetCode?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Structured Learning</h3>
                <p>Follow our carefully designed roadmap to master key concepts</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Practice Makes Perfect</h3>
                <p>Solve hundreds of curated problems to reinforce your skills</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
                <p>Learn from industry professionals and ace your interviews</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-8">Ready to Start?</h2>
            <Button className="bg-green-500 text-white hover:bg-green-600">Sign Up Now</Button>
          </section>
        </main>

        <footer className="bg-secondary py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 NeetCode. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
