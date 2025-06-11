import mongoose from "mongoose";

const creditPackageSchema = new mongoose.Schema({
    packageId: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    
    // Package Information
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    
    // Credit Details
    creditsAmount: {
        type: Number,
        required: true,
        min: 1
    },
    bonusCredits: {
        type: Number,
        default: 0,
        min: 0
    },
    
    // Pricing
    price: {
        type: Number,
        required: true,
        min: 0
    },
    currency: {
        type: String,
        default: 'INR',
        uppercase: true
    },
    
    // Package Type
    packageType: {
        type: String,
        enum: ['starter', 'popular', 'premium', 'enterprise', 'bonus'],
        required: true
    },
    
    // REMOVED: billingInterval, trialPeriodDays, maxCreditsPerMonth
    // REMOVED: All time-based fields
    
    // Tool Usage Limits (Optional - can be per-credit basis)
    toolCreditCosts: {
        type: mongoose.Schema.Types.Mixed,
        default: {
            "code_gen": 1,
            "image_gen": 2,
            "copywriter": 1,
            "content_optimizer": 1
        }
    },
    
    // Razorpay Integration
    razorpayPlanId: { type: String },
    
    // Status and Marketing
    isActive: { type: Boolean, default: true },
    isPopular: { type: Boolean, default: false },
    
    // Timestamps
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { 
    timestamps: true
});

// Indexes
creditPackageSchema.index({ packageId: 1 });
creditPackageSchema.index({ packageType: 1, isActive: 1 });
creditPackageSchema.index({ razorpayPlanId: 1 });

export default mongoose.models.CreditPackage || mongoose.model('CreditPackage', creditPackageSchema);
