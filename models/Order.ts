import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    
    // Order Details
    orderId: {
        type: String,
        unique: true,
        required: true,
    },
    
    // Credit Package Information
    creditPackageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CreditPackage',
        required: true
    },
    creditsAmount: {
        type: Number,
        required: true,
        min: 0
    },
    bonusCredits: {
        type: Number,
        default: 0,
        min: 0
    },
    
    // Payment Details
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    currency: {
        type: String,
        default: 'INR',
        uppercase: true
    },
    
    // Razorpay Integration
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
    
    // Order Status
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'cancelled', 'refunded'],
        default: 'pending'
    },
    
    // Payment Method
    paymentMethod: {
        type: String,
        enum: ['card', 'upi', 'netbanking', 'wallet', 'emi']
    },
    
    // Timestamps
    paidAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    timestamps: true
});

// Indexes
orderSchema.index({ userId: 1, createdAt: -1 });
orderSchema.index({ orderId: 1 });
orderSchema.index({ razorpayOrderId: 1 });
orderSchema.index({ status: 1 });

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
