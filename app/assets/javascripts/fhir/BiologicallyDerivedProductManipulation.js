const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BiologicallyDerivedProductManipulationSchema = BackboneElementSchemaFunction({
   description : String,
   timeDateTime : DateTime,
   timePeriod : PeriodSchema,
   fhirTitle: { type: String, default: 'BiologicallyDerivedProductManipulation' },
});

class BiologicallyDerivedProductManipulation extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductManipulationSchema);
    this._type = 'FHIR::BiologicallyDerivedProductManipulation';
  }
};


module.exports.BiologicallyDerivedProductManipulationSchema = BiologicallyDerivedProductManipulationSchema;
module.exports.BiologicallyDerivedProductManipulation = BiologicallyDerivedProductManipulation;
