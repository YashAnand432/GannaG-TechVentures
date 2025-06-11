import mongoose from "mongoose";


const subscriptionPlanSchema = new mongoose.Schema({
    planId : {
        type : String,
        unique : true,
        required : true,
        trim : true
    },
    name : {
        type : String,
        required : true,
        trim : true
    },
    planType : {
        type : String,
        enum : ['trial' , 'basic' , 'premium' , 'enterprise' , 'student'],
        required : true
    },
    price : {
        type : Number,
        required : true,
        min : 0
    },
    currency : {
        type : String,
        default : 'INR',
        uppercase : true
    },
    billingInterval : {
        type : String,
        enum : ['monthly' , 'yearly', 'quaterly' ],
        required : true
    },
    // credit allocation
    creditsIncluded : {
        type : Number,
        required : true,
        min : 0
    },
    bonusCredits : {
        type : Number,
        default : 0,
        min : 0
    },

    // limits and restrictions
    maxCreditsPerMonth : {
        type : Number,
        default : null
    },
    maxToolsUsage : {
        type : mongoose.Schema.Types.Mixed,
        default : {}
    },

    // razor pay integration
    razorpayPlanId : {type : String},

    // Status and marketting
    isActive : {
        type : Boolean , default : true
    },
    isPopular : {
        type : Boolean, default : false
    },

    // Timestamps
    createdAt : {type : Date , default : Date.now},
    updatedAt : {type : Date , default : Date.now}
}, { 
    timestamps : true
});

// Indexes
subscriptionPlanSchema.index({planId : 1});
subscriptionPlanSchema.index({ planType : 1, isActive : 1});
subscriptionPlanSchema.index({razorpayPlanId : 1});

export default mongoose.models.SubscriptionPlan || mongoose.model('SubscriptionPlan' , subscriptionPlanSchema);