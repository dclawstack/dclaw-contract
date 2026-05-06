"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Contract {
  id: string;
  title: string;
  contract_type: string;
  status: string;
  parties: string[];
  expiry_date: string;
  risk_score: number;
  created_at: string
}

export default function Dashboard() {
  const [title, setTitle] = useState("");
const [contractType, setContractType] = useState("NDA");
  const [contract, setContract] = useState<Contract | null>(null);
  const [extraData, setExtraData] = useState<any>(null);
const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!title || !contractType) return;
    setLoading(true);
    try {
      const res = await fetch("/contracts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        title: title,
        contract_type: contractType,
        }),
      });
      const data = await res.json();
      setContract(data);
      const extraRes = await fetch(`/contracts/${contract_id}/clauses`);
      const extraData = await extraRes.json();
      setExtraData(extraData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <FileText className="w-8 h-8" style={{ color: "#1E3A5F" }} />
        <div>
          <h1 className="text-2xl font-bold">DClaw Contract</h1>
          <p className="text-sm text-slate-500">Contract lifecycle management</p>
        </div>
        <Badge className="ml-auto" style={{ backgroundColor: "#1E3A5F" }}>Legal</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Contract</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Contract title</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Software License Agreement" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <select value={contractType} onChange={(e) => setContractType(e.target.value)} className="flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand">
                <option value="NDA">NDA</option><option value="MSA">MSA</option><option value="SOW">SOW</option><option value="Employment">Employment</option>
              </select>
            </div>
          </div>
          <Button onClick={handleSubmit} disabled={loading || !title || !contractType}>
            {loading ? "Processing..." : "Generate Contract"}
          </Button>
        </CardContent>
      </Card>

      {contract && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Card>
            <CardHeader>
              <CardTitle>Contract Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>ID:</strong> {contract.id}</p>
              <p><strong>Title:</strong> {contract.title}</p>
              <p><strong>Type:</strong> {contract.contract_type}</p>
              <p><strong>Status:</strong> {contract.status}</p>
              <p><strong>Expiry Date:</strong> {contract.expiry_date}</p>
              <p><strong>Risk Score:</strong> {contract.risk_score + '/5'}</p>
              <p><strong>Created:</strong> {new Date(contract.created_at).toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Parties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {contract.parties.map((item: string, i: number) => (
                  <Badge key={i} variant="secondary">{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Key Clauses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {extraData?.map((rec: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-sm">{rec.title}</span>
                    <Badge variant="secondary">Clause {i + 1}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
