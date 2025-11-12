import Navbar from "@/components/Navbar";
import ProfileSelector from "@/components/ProfileSelector";

export default function SelectProfile() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-16">
        <ProfileSelector />
      </div>
    </div>
  );
}
