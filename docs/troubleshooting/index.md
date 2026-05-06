# Troubleshooting

Common issues and solutions for DClaw Contract.

## Quick Diagnostics

```bash
# Check app pods
kubectl get pods -n dclaw-contract

# Check logs
kubectl logs -n dclaw-contract deployment/dclaw-contract-backend

# Check database
kubectl get clusters -n dclaw-contract
```

## Sections

- [Common Issues](./common-issues)
- [FAQ](./faq)
