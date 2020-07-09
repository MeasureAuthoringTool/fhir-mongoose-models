const mongoose = require('mongoose/browser');

const CqmMeasurePackageSchema = new mongoose.Schema(
  {
    file: mongoose.Schema.Types.Buffer,
    measure: { type: mongoose.Schema.Types.ObjectId, ref: 'Measure' },
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports.CqmMeasurePackageSchema = CqmMeasurePackageSchema;
class CqmMeasurePackage extends mongoose.Document {
  constructor(object) {
    super(object, CqmMeasurePackageSchema);
  }
}
module.exports.CqmMeasurePackage = CqmMeasurePackage;
