import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Share2 } from "lucide-react";

interface QRCodeCardProps {
  memberId: string;
  memberName: string;
  plan: string;
  validUntil: string;
}

export default function QRCodeCard({
  memberId,
  memberName,
  plan,
  validUntil,
}: QRCodeCardProps) {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <Badge className="mb-4 bg-primary text-primary-foreground">
          {plan}
        </Badge>
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {memberName}
        </h3>
        <p className="text-sm text-muted-foreground">
          ID: {memberId}
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg mb-6 flex items-center justify-center">
        <div className="w-60 h-60 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-48 h-48 border-4 border-primary/30 rounded-lg mb-2" />
            <p className="text-xs text-muted-foreground">QR Code</p>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Plano:</span>
          <span className="font-medium text-foreground">{plan}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Validade:</span>
          <span className="font-medium text-foreground">{validUntil}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1"
          data-testid="button-download-qrcode"
          onClick={() => console.log('Download QR Code')}
        >
          <Download className="w-4 h-4 mr-2" />
          Baixar
        </Button>
        <Button 
          variant="outline" 
          className="flex-1"
          data-testid="button-share-qrcode"
          onClick={() => console.log('Share QR Code')}
        >
          <Share2 className="w-4 h-4 mr-2" />
          Compartilhar
        </Button>
      </div>
    </Card>
  );
}
