
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ElementType;
  onClick?: () => void;
}

const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  onClick 
}: DashboardCardProps) => (
  <Card 
    className="cursor-pointer hover:bg-muted/50 transition-colors"
    onClick={onClick}
  >
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-5 w-5 text-healthcare-500" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default DashboardCard;
