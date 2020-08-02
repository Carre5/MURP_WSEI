using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public static class GSS
    {
        public enum OrderStatus
        {
            New = 1, 
            Draft,
            OpenReady,
            OpenInProgress,
            PendingPricing,
            Resolved,
            Withdrawn
        }

        public enum CarStatus
        {
            PendingRepair = 1,
            OpenReady,
            OpenOccupied
        }

        public enum DriverStatus
        {
            Ready = 1,
            OnVacation,
            Busy,
            PendingSoberUp
        }
    }
}
